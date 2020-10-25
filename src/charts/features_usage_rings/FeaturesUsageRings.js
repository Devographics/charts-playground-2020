import React, { Fragment } from 'react'
import { arc as d3Arc } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import { getNormalizedData } from './data'

const data = getNormalizedData()

const arc = d3Arc()
    .cornerRadius(3)
    .padAngle(.004)

const radians = (degrees) => degrees * Math.PI / 180
const degrees = (radians) => radians * 180 / Math.PI

const positionFromAngle = (angle, distance) => ({
    x: Math.cos(angle - Math.PI / 2) * distance,
    y: Math.sin(angle - Math.PI / 2) * distance,
})

const circleArc = (r, startAngle, endAngle) => {
    const start = positionFromAngle(endAngle, r)
    const end = positionFromAngle(startAngle, r)

    const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
        'M', start.x, start.y,
        'A', r, r, 0, arcSweep, 0, end.x, end.y,
    ].join(' ')

    return d
}

const outerRadius = 440
const categoriesRingThickness = 50
const yearRingThickness = 70

const maxNodeRadius = 24

const angleGap = 15
const angleStep = radians((360 - angleGap) / data.features.length)

const colors = {
    background: '#f1eff0',

    layout: '#b58389',
    shapes_graphics: '#e8afaf',
    interactions: '#f1796f',
    typography: '#d59a6e',
    animations_transforms: '#ebad36',
    media_queries: '#74baaf',
    other_features: '#884b58',
}

export const FeaturesUsageRings = () => {
    let currentCategoryAngle = radians(angleGap / 2)
    const categories = data.categories.map(category => {
        const categoryWithAngles = {
            ...category,
            startAngle: currentCategoryAngle,
            endAngle: currentCategoryAngle + category.features.length * angleStep,
        }
        categoryWithAngles.features = category.features.map((feature, index) => {
            const featureWithAngles = {
                ...feature,
                startAngle: categoryWithAngles.startAngle + index * angleStep,
                endAngle: categoryWithAngles.startAngle + (index + 1) * angleStep,
            }
            featureWithAngles.angle = featureWithAngles.startAngle + angleStep / 2

            return featureWithAngles
        })

        currentCategoryAngle = categoryWithAngles.endAngle

        return categoryWithAngles
    })

    let years = [...data.years]
    years.reverse()
    years = years.map((year, index) => ({
        year,
        index
    }))

    const nodeRadiusScale = scaleLinear()
        .domain([0, 1])
        .range([0, maxNodeRadius])

    return (
        <svg width={1400} height={1000}>
            <rect width={1400} height={1000} fill={colors.background}/>
            <g transform={`translate(450, 450)`}>
                {/*
                {years.map(year => {
                    const yearOuterRadius = outerRadius - categoriesRingThickness - year.index * yearRingThickness

                    return (
                        <Fragment key={year.year}>
                            <linearGradient id={`${year.year}Gradient`} gradientTransform="rotate(90)">
                                <stop offset="20%"  stopColor="#000000" stopOpacity={0} />
                                <stop offset="80%" stopColor="#000000" stopOpacity={1} />
                            </linearGradient>
                            <path
                                fill={`url(#${year.year}Gradient)`}
                                opacity={years.length * 0.04 - year.index * 0.04}
                                d={arc({
                                    innerRadius: yearOuterRadius - yearRingThickness,
                                    outerRadius: yearOuterRadius,
                                    startAngle: 0,
                                    endAngle: radians(180),
                                })}
                            />
                            <path
                                fill="#000000"
                                opacity={years.length * 0.04 - year.index * 0.04}
                                d={arc({
                                    innerRadius: yearOuterRadius - yearRingThickness,
                                    outerRadius: yearOuterRadius,
                                    startAngle: radians(180),
                                    endAngle: radians(360),
                                })}
                            />
                            <rect
                                opacity={years.length * 0.04 - year.index * 0.04}
                                y={-yearOuterRadius}
                                height={yearRingThickness}
                                width={outerRadius * 1.2}
                            />
                            <text
                                x={outerRadius * 1.17}
                                y={-yearOuterRadius + yearRingThickness * .83}
                                textAnchor="end"
                                opacity={.33}
                                style={{
                                    fontSize: 14,
                                    fontWeight: 600
                                }}
                            >
                                {year.year}
                            </text>
                        </Fragment>
                    )
                })}
                */}
                {years.map(year => {
                    const yearRadius = outerRadius - categoriesRingThickness - (year.index + 0.5) * yearRingThickness

                    return (
                        <g key={year.year}>
                            <circle
                                r={yearRadius}
                                stroke="rgb(136, 75, 88)"
                                opacity={.3}
                                fill="none"
                            />
                            <circle
                                r={3}
                                cy={-yearRadius}
                                fill="rgb(136, 75, 88)"
                            />
                            <text
                                y={-yearRadius - 12}
                                textAnchor="middle"
                                fill="rgb(136, 75, 88)"
                                style={{
                                    fontSize: 14,
                                    fontWeight: 600
                                }}
                            >
                                {year.year}
                            </text>
                        </g>
                    )
                })}
                <g>
                    {categories.map(category => {
                        return (
                            <Fragment key={category.id}>
                                {category.features.map(feature => {
                                    const pos0 = positionFromAngle(
                                        feature.angle,
                                        outerRadius - categoriesRingThickness
                                    )
                                    const pos1 = positionFromAngle(
                                        feature.angle,
                                        240
                                    )

                                    return (
                                        <Fragment key={feature.id}>
                                            <g transform={`rotate(${degrees(feature.angle - Math.PI / 2)})`}>
                                                <g transform={`translate(230, 0)`}>
                                                    <text
                                                        fill={colors[category.id]}
                                                        textAnchor="end"
                                                        dominantBaseline="middle"
                                                        style={{
                                                            fontSize: 10,
                                                            fontWeight: 600
                                                        }}
                                                    >
                                                        {feature.id}
                                                    </text>
                                                </g>
                                            </g>
                                            <line
                                                stroke={colors[category.id]}
                                                x1={pos1.x}
                                                x2={pos0.x}
                                                y1={pos1.y}
                                                y2={pos0.y}
                                                strokeDasharray={`3 4`}
                                                opacity={1}
                                            />
                                        </Fragment>
                                    )
                                })}
                            </Fragment>
                        )
                    })}
                </g>
                <g>
                    {categories.map(category => {
                        return (
                            <Fragment key={category.id}>
                                {category.features.map(feature => {
                                    return (
                                        <Fragment key={feature.id}>
                                            {years.map(year => {
                                                const yearData = feature.years[year.year]

                                                if (yearData === undefined) {
                                                    return null
                                                }

                                                const distance = outerRadius
                                                    - categoriesRingThickness
                                                    - (year.index + 1) * yearRingThickness
                                                    + yearRingThickness * .5
                                                const pos = positionFromAngle(feature.angle, distance)

                                                const radius = nodeRadiusScale(yearData.awarenessRatio)

                                                return (
                                                    <Fragment key={year.year}>
                                                        <circle
                                                            cx={pos.x}
                                                            cy={pos.y}
                                                            r={radius}
                                                            fill={colors[category.id]}
                                                            fillOpacity={.4}
                                                        />
                                                        <circle
                                                            cx={pos.x}
                                                            cy={pos.y}
                                                            r={radius * yearData.usageRatio}
                                                            fill={colors[category.id]}
                                                        />
                                                    </Fragment>
                                                )
                                            })}
                                        </Fragment>
                                    )
                                })}
                            </Fragment>
                        )
                    })}
                </g>
                {categories.map(category => {
                    return (
                        <g key={category.id} id={category.id}>
                            <path
                                fill={colors[category.id]}
                                d={arc({
                                    innerRadius: outerRadius - categoriesRingThickness,
                                    outerRadius: outerRadius,
                                    startAngle: category.startAngle,
                                    endAngle: category.endAngle,
                                })}
                            />
                            <defs>
                                <path
                                    id={`category_${category.id}_path`}
                                    d={circleArc(outerRadius - categoriesRingThickness * .5, category.startAngle, category.endAngle)}
                                />
                            </defs>
                            <text
                                style={{
                                    fontWeight: 600
                                }}
                                fill="#ffffff"
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                <textPath
                                    xlinkHref={`#category_${category.id}_path`}
                                    startOffset="50%"
                                >
                                    {category.id}
                                </textPath>
                            </text>
                        </g>
                    )
                })}
            </g>
        </svg>
    )
}
