import React, { Fragment } from 'react'
import { scaleLinear } from 'd3-scale'
import { PatternDots, PatternLines } from '@nivo/core'
import { computeData } from './data'

const colors = {
    background: '#232840',
    text: '#a9e5e9',
    bar_text: '#101628',
    border: '#67888a',
    shadow: '#0c0f1c',

    usage_text: '#f6c2ea',
    would_not_use: '#F649A7',
    would_not_use_bis: '#854574',
    would_use: '#F649A7',
    interest_text: '#d3ffe1',
    interested: '#59DF7F',
    not_interested: '#59DF7F',
    not_interested_bis: '#4c7256',
    never_heard: '#59608a',
}

const DIMENSIONS = {
    width: 800,
    height: 600,
    margin: 24,
    shadow: {
        offsetX: -8,
        offsetY: 12,
    },
    legend: {
        height: 100,
        itemHeight: 18,
        itemWidth: 90,
        secondaryItemWidth: 60,
    },
}

const Legend = () => {
    const items = [
        {
            id: 'interested',
            width: DIMENSIONS.legend.itemWidth,
            fill: colors.interested,
            label: [DIMENSIONS.legend.itemWidth * 0.25, 12],
            labelAnchor: 'end',
        },
        {
            id: 'not_interested',
            width: DIMENSIONS.legend.secondaryItemWidth,
            fill: 'url(#disinterestedPattern)',
            label: [DIMENSIONS.legend.itemWidth * 0.25, 30],
            labelAnchor: 'end',
        },
        {
            id: 'would_not_use',
            width: DIMENSIONS.legend.secondaryItemWidth,
            fill: 'url(#dissatisfiedPattern)',
            label: [
                DIMENSIONS.legend.secondaryItemWidth * 2 + DIMENSIONS.legend.itemWidth * 1.75,
                30,
            ],
            labelAnchor: 'start',
        },
        {
            id: 'would_use',
            width: DIMENSIONS.legend.itemWidth,
            fill: colors.would_use,
            label: [
                DIMENSIONS.legend.secondaryItemWidth * 2 + DIMENSIONS.legend.itemWidth * 1.75,
                12,
            ],
            labelAnchor: 'start',
        },
    ]

    let x = 0
    items.forEach((item) => {
        item.x = x
        x += item.width
    })
    const totalWidth = x

    return (
        <g transform={`translate(${DIMENSIONS.width / 2 - totalWidth / 2}, 0)`}>
            {items.map((item) => (
                <rect
                    key={item.id}
                    x={item.x}
                    width={item.width}
                    height={DIMENSIONS.legend.itemHeight}
                    fill={item.fill}
                />
            ))}
            {items.map((item) => (
                <Fragment key={item.id}>
                    <path
                        fill="none"
                        stroke={colors.border}
                        d={`
                            M${item.x + 2},${DIMENSIONS.legend.itemHeight + 2}
                            L${item.x + 2},${DIMENSIONS.legend.itemHeight + 8}
                            L${item.x + item.width - 2},${DIMENSIONS.legend.itemHeight + 8}
                            L${item.x + item.width - 2},${DIMENSIONS.legend.itemHeight + 2}
                        `}
                    />
                    <line
                        x1={item.x + item.width / 2}
                        x2={item.x + item.width / 2}
                        y1={DIMENSIONS.legend.itemHeight + 8}
                        y2={DIMENSIONS.legend.itemHeight + 8 + item.label[1]}
                        fill="none"
                        stroke={colors.border}
                    />
                    <line
                        x1={item.label[0]}
                        x2={item.x + item.width / 2}
                        y1={DIMENSIONS.legend.itemHeight + 8 + item.label[1]}
                        y2={DIMENSIONS.legend.itemHeight + 8 + item.label[1]}
                        fill="none"
                        stroke={colors.border}
                    />
                    <text
                        x={item.label[0] + (item.labelAnchor === 'end' ? -8 : 8)}
                        y={DIMENSIONS.legend.itemHeight + 8 + item.label[1]}
                        fill={colors.text}
                        textAnchor={item.labelAnchor}
                        dominantBaseline="middle"
                        style={{
                            fontSize: 11,
                            fontWeight: 600,
                        }}
                    >
                        {item.id}
                    </text>
                </Fragment>
            ))}
            <path
                fill="none"
                stroke={colors.border}
                d={`
                    M${totalWidth + 2},${2}
                    L${totalWidth + 8},${2}
                    L${totalWidth + 8},${DIMENSIONS.legend.itemHeight - 2}
                    L${totalWidth + 2},${DIMENSIONS.legend.itemHeight - 2}
                `}
            />
            <line
                x1={totalWidth + 8}
                x2={totalWidth + 28}
                y1={DIMENSIONS.legend.itemHeight / 2}
                y2={DIMENSIONS.legend.itemHeight / 2}
                fill="none"
                stroke={colors.border}
            />
            <text
                x={totalWidth + 28 + 8}
                y={DIMENSIONS.legend.itemHeight / 2}
                fill={colors.text}
                dominantBaseline="middle"
                style={{
                    fontSize: 11,
                    fontWeight: 600,
                }}
            >
                awareness
            </text>
        </g>
    )
}

const Label = ({
    x = 0,
    y = 0,
    width,
    height,
    label,
    color = colors.text,
    outline = colors.background,
}) => {
    if (width < 30 || height < 16) {
        return null
    }

    return (
        <g transform={`translate(${x + width / 2}, ${y + height / 2})`}>
            <text
                textAnchor="middle"
                dominantBaseline="central"
                stroke={outline}
                strokeWidth={14}
                strokeLinejoin="round"
                opacity={0.5}
                style={{
                    fontWeight: 600,
                    fontSize: 11,
                }}
            >
                {label}
            </text>
            <text
                textAnchor="middle"
                dominantBaseline="central"
                stroke={outline}
                strokeWidth={6}
                strokeLinejoin="round"
                style={{
                    fontWeight: 600,
                    fontSize: 11,
                }}
            >
                {label}
            </text>
            <text
                textAnchor="middle"
                dominantBaseline="central"
                fill={color}
                style={{
                    fontWeight: 600,
                    fontSize: 11,
                }}
            >
                {label}
            </text>
        </g>
    )
}

export const ToolsExperienceMarimekko = () => {
    const data = computeData()

    let awarenessRatioSum = 0
    data.forEach((toolData) => {
        awarenessRatioSum += toolData.awarenessRatio
    })
    const awarenessScale = scaleLinear()
        .domain([0, awarenessRatioSum])
        .range([0, DIMENSIONS.height])

    const splitScale = scaleLinear()
        .domain([0, data[0].usageRatio + data[data.length - 1].interestRatio])
        .range([0, DIMENSIONS.width])
    const splitPos = splitScale(data[data.length - 1].interestRatio)

    let x = 0

    return (
        <>
            <svg
                width={DIMENSIONS.width + DIMENSIONS.margin * 2}
                height={DIMENSIONS.legend.height + DIMENSIONS.height + DIMENSIONS.margin * 2}
                style={{ background: colors.background }}
            >
                <PatternLines
                    id="dissatisfiedPattern"
                    background={colors.background}
                    color={colors.would_not_use}
                    rotation={-45}
                    spacing={7}
                    lineWidth={3}
                />
                <PatternDots
                    id="disinterestedPattern"
                    background={colors.background}
                    color={colors.not_interested}
                    padding={1}
                    size={4}
                    stagger
                />
                <g transform={`translate(0, ${DIMENSIONS.margin})`}>
                    <Legend />
                </g>
                <g
                    transform={`translate(${DIMENSIONS.margin + splitPos}, ${
                        DIMENSIONS.margin + DIMENSIONS.legend.height
                    })`}
                >
                    {data.map((tool) => {
                        const toolSize = awarenessScale(tool.awarenessRatio)

                        const usageScale = scaleLinear()
                            .domain([0, 1])
                            .range([0, splitScale(tool.usageRatio)])
                        const satisfiedSize = usageScale(tool.satisfactionRatio)
                        const dissatisfiedSize = usageScale(tool.dissatisfactionRatio)

                        const interestScale = scaleLinear()
                            .domain([0, 1])
                            .range([0, splitScale(tool.interestRatio)])
                        const interestedSize = interestScale(tool.interestedRatio)
                        const disinterestedSize = interestScale(tool.disinterestedRatio)

                        const node = (
                            <g key={tool.id} id={tool.id} transform={`translate(0, ${x})`}>
                                <g
                                    transform={`translate(${
                                        -disinterestedSize - interestedSize
                                    }, 0)`}
                                >
                                    <rect
                                        x={DIMENSIONS.shadow.offsetX}
                                        y={DIMENSIONS.shadow.offsetY}
                                        width={
                                            interestedSize +
                                            disinterestedSize +
                                            DIMENSIONS.shadow.offsetX * -1
                                        }
                                        height={toolSize}
                                        fill={colors.shadow}
                                    />
                                    <rect
                                        width={interestedSize}
                                        height={toolSize}
                                        fill={colors.interested}
                                    />
                                    <rect
                                        x={interestedSize}
                                        width={disinterestedSize}
                                        height={toolSize}
                                        fill="url(#disinterestedPattern)"
                                    />
                                    <rect
                                        width={interestedSize + disinterestedSize}
                                        height={toolSize}
                                        fill="none"
                                        stroke={colors.background}
                                        strokeWidth={2}
                                    />
                                    <Label
                                        width={interestedSize}
                                        height={toolSize}
                                        label={`${Math.round(tool.interestedRatio * 100)}%`}
                                        color={colors.bar_text}
                                        outline={colors.interested}
                                    />
                                    <Label
                                        x={interestedSize}
                                        width={disinterestedSize}
                                        height={toolSize}
                                        label={`${Math.round(tool.disinterestedRatio * 100)}%`}
                                        color={colors.bar_text}
                                        outline={colors.interested}
                                    />
                                </g>
                                <rect
                                    y={DIMENSIONS.shadow.offsetY}
                                    width={
                                        dissatisfiedSize + satisfiedSize + DIMENSIONS.shadow.offsetX
                                    }
                                    height={toolSize}
                                    fill={colors.shadow}
                                />
                                <rect
                                    width={dissatisfiedSize}
                                    height={toolSize}
                                    fill="url(#dissatisfiedPattern)"
                                />
                                <rect
                                    x={dissatisfiedSize}
                                    width={satisfiedSize}
                                    height={toolSize}
                                    fill={colors.would_use}
                                />
                                <rect
                                    width={dissatisfiedSize + satisfiedSize}
                                    height={toolSize}
                                    fill="none"
                                    stroke={colors.background}
                                    strokeWidth={2}
                                />
                                <Label
                                    width={dissatisfiedSize}
                                    height={toolSize}
                                    label={`${Math.round(tool.dissatisfactionRatio * 100)}%`}
                                    color={colors.bar_text}
                                    outline={colors.would_use}
                                />
                                <Label
                                    x={dissatisfiedSize}
                                    width={satisfiedSize}
                                    height={toolSize}
                                    label={`${Math.round(tool.satisfactionRatio * 100)}%`}
                                    color={colors.bar_text}
                                    outline={colors.would_use}
                                />
                            </g>
                        )

                        x += toolSize

                        return node
                    })}
                </g>
            </svg>
        </>
    )
}
