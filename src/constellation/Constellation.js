import React, { useState, Fragment } from 'react'
import { random } from 'lodash'
import {
    polygonCentroid,
    polygonHull,
} from 'd3-polygon'
import {
    forceSimulation,
    forceLink,
    forceCenter,
    forceManyBody,
    forceCollide,
} from 'd3-force'
import {
    packEnclose,
    packSiblings
} from 'd3-hierarchy'

const featuresByCategory = {
    layout: [
        'grid',
        'subgrid',
        'flexbox',
        'multi_column',
        'writing_modes',
        'exclusions',
        'position_sticky',
        'logical_properties',
        'aspect_ratio',
        'content_visibility',
    ],
    shapes_graphics: [
        'shapes',
        'object_fit',
        'clip_path',
        'masks',
        'blend_modes',
        'filter_effects',
        'backdrop_filter',
    ],
    interactions: [
        'scroll_snap',
        'overscroll_behavior',
        'overflow_anchor',
        'touch_action',
        'pointer_events',
    ],
    typography: [
        'web_fonts',
        'variables_fonts',
        'line_breaking',
        'font_variant',
        'initial_letter',
        'font_variant_numeric',
        'font_display',
        'line_clamp',
        'direction',
    ],
    animations_transforms: [
        'transitions',
        'transforms',
        'animations',
        'perspective',
    ],
    media_queries: [
        'prefers_reduced_motion',
        'prefers_color_scheme',
        'color_gamut',
    ],
    other_features: [
        'variables',
        'feature_support_queries',
        'containment',
        'will_change',
        'calc',
        'houdini',
        'comparison_functions',
    ]
}

const colors = {
    background: '#141435',
    diagram: '#3a3a75',

    layout: '#b58389',
    shapes_graphics: '#e8afaf',
    interactions: '#f1796f',
    typography: '#d59a6e',
    animations_transforms: '#ebad36',
    media_queries: '#74baaf',
    other_features: '#884b58',
}

const generateLinkId = (source, target) => {
    const parts = [source, target]
    parts.sort()

    return parts.join('.')
}

const RADIUS = 380

const computeCategory = (categoryId) => {
    const nodes = []
    const links = []

    // connect 2 nodes, making sure there's no existing link
    const connect = (source, target) => {
        const linkId = generateLinkId(source, target)

        const existingLink = links.find(link => link.id === linkId)
        if (existingLink) return

        links.push({
            id: linkId,
            source,
            target
        })
    }

    const featureIds = featuresByCategory[categoryId]
    featureIds.forEach((featureId, featureIndex) => {
        nodes.push({
            type: 'feature',
            id: featureId,
            categoryId,
            radius: 6,
        })

        if (featureIndex > 0) {
            const previousFeature = featureIds[featureIndex - 1]
            connect(previousFeature, featureId)
        }

        if (Math.random() < .5) {
            const randomSibling = featureIds[random(0, featureIds.length - 1)]
            if (randomSibling !== featureId) {
                connect(featureId, randomSibling)
            }
        }

        /*
        if (Math.random() < .1) {
            featureIds.forEach(target => {
                if (target !== featureId) {
                    connect(featureId, target)
                }
            })
        }
        */
    })

    const linkForce = forceLink()
        .id(d => d.id)
        .distance(() => {
            return 60 + Math.random() * 80
        })

    const chargeForce = forceManyBody()
        .strength(-160)
        .distanceMin(1)
        .distanceMax(200)

    const collisionForce = forceCollide(5)
        .strength(100)

    const centerForce = forceCenter(0, 0)

    const simulation = forceSimulation(nodes)
        .force('link', linkForce.links(links))
        .force('charge', chargeForce)
        .force('center', centerForce)
        .force('collide', collisionForce)
        .stop()

    simulation.tick(200)

    const circle = packEnclose(nodes.map(node => ({
        x: node.x,
        y: node.y,
        r: node.radius
    })))

    const pointsArray = nodes.map(node => [node.x, node.y])
    const hull = polygonHull(pointsArray)
    const centroid = polygonCentroid(hull)

    return {
        nodes,
        links,
        circle,
        centroid,
    }
}

const computeCategories = () => {
    const allNodes = []
    const allLinks = []
    const categoriesNodes = []

    Object.keys(featuresByCategory).forEach(categoryId => {
        const categoryLayout = computeCategory(categoryId)
        categoriesNodes.push({
            id: categoryId,
            type: 'category',
            categoryId,
            radius: categoryLayout.circle.r,
            r: categoryLayout.circle.r + 40,
            ox: categoryLayout.circle.x,
            oy: categoryLayout.circle.y,
            children: categoryLayout,
            centroid: {
                x: categoryLayout.centroid[0],
                y: categoryLayout.centroid[1]
            }
        })
    })

    packSiblings(categoriesNodes)

    categoriesNodes.forEach(categoriesNode => {
        const deltaX = categoriesNode.x - categoriesNode.ox
        const deltaY = categoriesNode.y - categoriesNode.oy

        allNodes.push(categoriesNode)

        categoriesNode.children.nodes.forEach(node => {
            node.x += deltaX
            node.y += deltaY

            allNodes.push(node)
        })

        categoriesNode.centroid.x += deltaX
        categoriesNode.centroid.y += deltaY

        categoriesNode.children.links.forEach(link => {
            allLinks.push(link)
        })
    })

    const circle = packEnclose(categoriesNodes.map(node => ({
        x: node.x,
        y: node.y,
        r: node.r
    })))

    // adjust positions and sizes to get a constant chart size
    const sizeRatio = RADIUS / circle.r
    circle.r = circle.r * sizeRatio
    allNodes.forEach(node => {
        node.x *= sizeRatio
        node.y *= sizeRatio

        if (node.type === 'category') {
            node.radius *= sizeRatio
            node.centroid.x *= sizeRatio
            node.centroid.y *= sizeRatio
        }
    })

    return {
        nodes: allNodes,
        links: allLinks,
        circle,
        categories: categoriesNodes,
    }
}

const Chart = () => {
    const { nodes, links, categories } = computeCategories()

    return (
        <svg width={900} height={900} style={{
            background: colors.background
        }}>
            <g transform={`translate(450, 450)`}>
                {categories.map(category => (
                    <circle
                        key={category.id}
                        cx={category.centroid.x}
                        cy={category.centroid.y}
                        r={3}
                        opacity={0}
                        fill="#ff0000"
                    />
                ))}
                {Array.from({ length: 6 }, (_, i) => i).map(index => (
                    <line
                        transform={`rotate(${index * 30})`}
                        key={index}
                        x1={-RADIUS}
                        x2={RADIUS}
                        fill="none"
                        strokeDasharray="3 5"
                        stroke={colors.diagram}
                    />
                ))}
                {Array.from({ length: 3 }, (_, i) => i).map(index => (
                    <circle
                        key={index}
                        r={RADIUS - index * 100}
                        fill="none"
                        strokeDasharray="3 5"
                        stroke={colors.diagram}
                    />
                ))}
                <circle
                    r={RADIUS}
                    fill="none"
                    stroke={colors.diagram}
                />
                <circle
                    r={RADIUS + 4}
                    fill="none"
                    stroke={colors.diagram}
                    strokeWidth={8}
                    strokeDasharray={`14 14`}
                />
                <circle
                    r={RADIUS + 8}
                    fill="none"
                    stroke={colors.diagram}
                />
                {links.map(link => {
                    return (
                        <g key={link.id}>
                            <line
                                stroke={colors[link.source.categoryId]}
                                strokeWidth={8}
                                fill="none"
                                x1={link.source.x}
                                x2={link.target.x}
                                y1={link.source.y}
                                y2={link.target.y}
                                opacity={.1}
                            />
                            <line
                                stroke={colors[link.source.categoryId]}
                                strokeWidth={2}
                                fill="none"
                                x1={link.source.x}
                                x2={link.target.x}
                                y1={link.source.y}
                                y2={link.target.y}
                                opacity={1}
                                strokeDasharray="3 5"
                            />
                        </g>
                    )
                })}
                {nodes.map(node => {
                    if (node.type === 'category') {
                        return (
                            <g key={node.id}>
                                <circle
                                    fill={colors[node.categoryId]}
                                    cx={node.x}
                                    cy={node.y}
                                    r={node.radius}
                                    fillOpacity={0}
                                />
                            </g>
                        )
                    }

                    return (
                        <g key={node.id}>
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r={node.radius}
                                stroke={colors.background}
                                strokeWidth={12}
                            />
                            <circle
                                fill={colors[node.categoryId]}
                                cx={node.x}
                                cy={node.y}
                                r={node.radius}
                            />
                        </g>
                    )
                })}
                {categories.map(category => (
                    <Fragment key={category.id}>
                        {category.children.nodes.map(node => {
                            let textAnchor = 'start'
                            let xOffset = node.radius + 10
                            if (node.x < category.centroid.x) {
                                textAnchor = 'end'
                                xOffset = -xOffset
                            }

                            return (
                                <g key={node.id}>
                                    <text
                                        x={node.x + xOffset}
                                        y={node.y}
                                        textAnchor={textAnchor}
                                        dominantBaseline="central"
                                        stroke={colors.background}
                                        strokeWidth={6}
                                        strokeLinejoin="round"
                                        style={{
                                            fontSize: 10,
                                            fontWeight: 400
                                        }}
                                    >
                                        {node.id}
                                    </text>
                                    <text
                                        x={node.x + xOffset}
                                        y={node.y}
                                        fill={colors[category.id]}
                                        textAnchor={textAnchor}
                                        dominantBaseline="central"
                                        style={{
                                            fontSize: 10,
                                            fontWeight: 400
                                        }}
                                    >
                                        {node.id}
                                    </text>
                                </g>
                            )
                        })}
                    </Fragment>
                ))}
                {categories.map(category => (
                    <g
                        key={category.id}
                        transform={`translate(${category.x}, ${category.y - category.radius - 20})`}
                    >
                        <text
                            fill={colors[category.id]}
                            stroke={colors.background}
                            strokeWidth={6}
                            strokeLinejoin="round"
                            textAnchor="middle"
                            style={{
                                fontWeight: 600,
                                fontSize: 16
                             }}
                        >
                            {category.id}
                        </text>
                        <text
                            fill={colors[category.id]}
                            textAnchor="middle"
                            style={{
                                fontWeight: 600,
                                fontSize: 16
                            }}
                        >
                            {category.id}
                        </text>
                    </g>
                ))}
            </g>
        </svg>
    )
}

export const Constellation = () => {
    const [token, setToken] = useState(0)

    return (
        <div>
            <div>
                <button onClick={() => {
                    setToken(previous => previous + 1)
                }}>generate</button>
            </div>
            <Chart key={token}/>
        </div>
    )
}