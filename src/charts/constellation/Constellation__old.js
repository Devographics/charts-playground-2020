import React, { useState, Fragment } from 'react'
import { polygonCentroid } from 'd3-polygon'
import { forceSimulation, forceLink, forceCenter, forceManyBody, forceCollide } from 'd3-force'
import { packEnclose } from 'd3-hierarchy'

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
    animations_transforms: ['transitions', 'transforms', 'animations', 'perspective'],
    media_queries: ['prefers_reduced_motion', 'prefers_color_scheme', 'color_gamut'],
    other_features: [
        'variables',
        'feature_support_queries',
        'containment',
        'will_change',
        'calc',
        'houdini',
        'comparison_functions',
    ],
}

const colors = {
    background: '#141435',

    root: '#FF0000',

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

const Chart = () => {
    const nodes = []
    const links = []

    nodes.push({
        type: 'root',
        id: 'root',
        categoryId: 'root',
        radius: 20,
    })

    const connect = (source, target) => {
        const linkId = generateLinkId(source, target)

        const existingLink = links.find((link) => link.id === linkId)
        if (existingLink) {
            return
        }

        links.push({
            id: linkId,
            source,
            target,
        })
    }

    Object.entries(featuresByCategory).forEach(([categoryId, featureIds]) => {
        nodes.push({
            type: 'category',
            id: categoryId,
            categoryId,
            radius: 12,
        })

        connect('root', categoryId)

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
            } else {
                connect(categoryId, featureId)
            }

            /*
            if (Math.random() < .5) {
                const randomSibling = featureIds[random(0, featureIds.length - 1)]
                if (randomSibling !== featureId) {
                    connect(featureId, randomSibling)
                }
            }
            */

            if (Math.random() < 0.2) {
                featureIds.forEach((target) => {
                    if (target !== featureId) {
                        connect(featureId, target)
                    }
                })
            }
        })
    })

    const linkForce = forceLink()
        .id((d) => d.id)
        .distance(() => {
            return 30 + Math.random() * 100
        })

    const chargeForce = forceManyBody().strength(-140).distanceMin(1).distanceMax(200)

    const collisionForce = forceCollide(5).strength(100)

    const centerForce = forceCenter(450, 450)

    const simulation = forceSimulation(nodes)
        .force('link', linkForce.links(links))
        .force('charge', chargeForce)
        .force('center', centerForce)
        .force('collide', collisionForce)
        .stop()

    simulation.tick(200)

    const circle = packEnclose(
        nodes.map((node) => ({
            x: node.x,
            y: node.y,
            r: node.radius,
        }))
    )

    return (
        <svg
            width={900}
            height={900}
            style={{
                background: colors.background,
            }}
        >
            <circle cx={circle.x} cy={circle.y} r={circle.r + 12} fill="none" stroke="#884b58" />
            {links.map((link) => {
                if (link.source.type === 'root') {
                    return null
                }

                if (link.source.type === 'category') {
                    return null
                }

                return (
                    <g>
                        <line
                            stroke={colors[link.source.categoryId]}
                            fill="none"
                            x1={link.source.x}
                            x2={link.target.x}
                            y1={link.source.y}
                            y2={link.target.y}
                            opacity={0.3}
                        />
                    </g>
                )
            })}
            {nodes.map((node) => {
                if (node.type === 'root') {
                    return null
                }

                if (node.type === 'category') {
                    return null
                }

                return (
                    <g key={node.id}>
                        <circle
                            fill={colors[node.categoryId]}
                            cx={node.x}
                            cy={node.y}
                            r={node.radius}
                        />
                    </g>
                )
            })}
            {nodes.map((node) => {
                if (node.type === 'category') {
                    return (
                        <Fragment key={node.id}>
                            <text
                                x={node.x}
                                y={node.y - node.radius - 12}
                                fill={colors[node.categoryId]}
                                stroke={colors.background}
                                strokeWidth={6}
                                strokeLinejoin="round"
                                textAnchor="middle"
                                style={{
                                    fontWeight: 600,
                                    fontSize: 16,
                                }}
                            >
                                {node.id}
                            </text>
                            <text
                                x={node.x}
                                y={node.y - node.radius - 12}
                                fill={colors[node.categoryId]}
                                textAnchor="middle"
                                style={{
                                    fontWeight: 600,
                                    fontSize: 16,
                                }}
                            >
                                {node.id}
                            </text>
                        </Fragment>
                    )
                }

                return null
            })}
        </svg>
    )
}

export const Constellation = () => {
    const [token, setToken] = useState(0)

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        setToken((previous) => previous + 1)
                    }}
                >
                    generate
                </button>
            </div>
            <Chart key={token} />
        </div>
    )
}
