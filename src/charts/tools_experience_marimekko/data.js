import { sortBy } from 'lodash'

const rawData = [
    {
        id: 'styled_components',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'interested',
                        count: 679,
                        percentage: 22.8,
                    },
                    {
                        id: 'not_interested',
                        count: 466,
                        percentage: 15.6,
                    },
                    {
                        id: 'never_heard',
                        count: 434,
                        percentage: 14.5,
                    },
                    {
                        id: 'would_use',
                        count: 1134,
                        percentage: 38,
                    },
                    {
                        id: 'would_not_use',
                        count: 270,
                        percentage: 9.1,
                    },
                ],
            },
        },
    },
    {
        id: 'jss',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'would_not_use',
                        count: 172,
                        percentage: 5.8,
                    },
                    {
                        id: 'would_use',
                        count: 189,
                        percentage: 6.3,
                    },
                    {
                        id: 'interested',
                        count: 353,
                        percentage: 11.8,
                    },
                    {
                        id: 'never_heard',
                        count: 1563,
                        percentage: 52.3,
                    },
                    {
                        id: 'not_interested',
                        count: 710,
                        percentage: 23.8,
                    },
                ],
            },
        },
    },
    {
        id: 'styled_jsx',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'never_heard',
                        count: 1140,
                        percentage: 38.2,
                    },
                    {
                        id: 'would_not_use',
                        count: 243,
                        percentage: 8.1,
                    },
                    {
                        id: 'would_use',
                        count: 472,
                        percentage: 15.8,
                    },
                    {
                        id: 'interested',
                        count: 432,
                        percentage: 14.5,
                    },
                    {
                        id: 'not_interested',
                        count: 700,
                        percentage: 23.4,
                    },
                ],
            },
        },
    },
    {
        id: 'radium',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'interested',
                        count: 108,
                        percentage: 3.6,
                    },
                    {
                        id: 'would_not_use',
                        count: 71,
                        percentage: 2.4,
                    },
                    {
                        id: 'would_use',
                        count: 14,
                        percentage: 0.5,
                    },
                    {
                        id: 'never_heard',
                        count: 2360,
                        percentage: 79,
                    },
                    {
                        id: 'not_interested',
                        count: 436,
                        percentage: 14.6,
                    },
                ],
            },
        },
    },
    {
        id: 'emotion',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'would_not_use',
                        count: 106,
                        percentage: 3.5,
                    },
                    {
                        id: 'interested',
                        count: 394,
                        percentage: 13.2,
                    },
                    {
                        id: 'would_use',
                        count: 357,
                        percentage: 11.9,
                    },
                    {
                        id: 'never_heard',
                        count: 1692,
                        percentage: 56.6,
                    },
                    {
                        id: 'not_interested',
                        count: 441,
                        percentage: 14.7,
                    },
                ],
            },
        },
    },
    {
        id: 'css_modules',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'not_interested',
                        count: 310,
                        percentage: 10.3,
                    },
                    {
                        id: 'interested',
                        count: 856,
                        percentage: 28.6,
                    },
                    {
                        id: 'would_use',
                        count: 856,
                        percentage: 28.6,
                    },
                    {
                        id: 'would_not_use',
                        count: 134,
                        percentage: 4.5,
                    },
                    {
                        id: 'never_heard',
                        count: 842,
                        percentage: 28.1,
                    },
                ],
            },
        },
    },
    {
        id: 'styled_system',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'not_interested',
                        count: 232,
                        percentage: 7.8,
                    },
                    {
                        id: 'interested',
                        count: 274,
                        percentage: 9.2,
                    },
                    {
                        id: 'would_use',
                        count: 184,
                        percentage: 6.2,
                    },
                    {
                        id: 'would_not_use',
                        count: 52,
                        percentage: 1.7,
                    },
                    {
                        id: 'never_heard',
                        count: 2246,
                        percentage: 75.2,
                    },
                ],
            },
        },
    },
    {
        id: 'stitches',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'interested',
                        count: 139,
                        percentage: 4.7,
                    },
                    {
                        id: 'not_interested',
                        count: 174,
                        percentage: 5.8,
                    },
                    {
                        id: 'never_heard',
                        count: 2616,
                        percentage: 87.6,
                    },
                    {
                        id: 'would_not_use',
                        count: 13,
                        percentage: 0.4,
                    },
                    {
                        id: 'would_use',
                        count: 43,
                        percentage: 1.4,
                    },
                ],
            },
        },
    },
    {
        id: 'styletron',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'would_use',
                        count: 12,
                        percentage: 0.4,
                    },
                    {
                        id: 'not_interested',
                        count: 180,
                        percentage: 6,
                    },
                    {
                        id: 'never_heard',
                        count: 2724,
                        percentage: 91,
                    },
                    {
                        id: 'interested',
                        count: 62,
                        percentage: 2.1,
                    },
                    {
                        id: 'would_not_use',
                        count: 14,
                        percentage: 0.5,
                    },
                ],
            },
        },
    },
    {
        id: 'fela',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'never_heard',
                        count: 2774,
                        percentage: 92.9,
                    },
                    {
                        id: 'interested',
                        count: 46,
                        percentage: 1.5,
                    },
                    {
                        id: 'would_not_use',
                        count: 16,
                        percentage: 0.5,
                    },
                    {
                        id: 'would_use',
                        count: 12,
                        percentage: 0.4,
                    },
                    {
                        id: 'not_interested',
                        count: 139,
                        percentage: 4.7,
                    },
                ],
            },
        },
    },
    {
        id: 'linaria',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'never_heard',
                        count: 2693,
                        percentage: 90,
                    },
                    {
                        id: 'not_interested',
                        count: 150,
                        percentage: 5,
                    },
                    {
                        id: 'interested',
                        count: 101,
                        percentage: 3.4,
                    },
                    {
                        id: 'would_use',
                        count: 29,
                        percentage: 1,
                    },
                    {
                        id: 'would_not_use',
                        count: 19,
                        percentage: 0.6,
                    },
                ],
            },
        },
    },
    {
        id: 'astroturf',
        experience: {
            year: {
                buckets: [
                    {
                        id: 'not_interested',
                        count: 152,
                        percentage: 5.1,
                    },
                    {
                        id: 'would_not_use',
                        count: 8,
                        percentage: 0.3,
                    },
                    {
                        id: 'never_heard',
                        count: 2733,
                        percentage: 91.5,
                    },
                    {
                        id: 'would_use',
                        count: 14,
                        percentage: 0.5,
                    },
                    {
                        id: 'interested',
                        count: 81,
                        percentage: 2.7,
                    },
                ],
            },
        },
    },
]

export const computeData = () => {
    const computedTools = []
    rawData.forEach((toolData) => {
        let toolTotalAnswers = 0
        const counts = {}
        toolData.experience.year.buckets.forEach((bucket) => {
            // console.log(bucket)
            toolTotalAnswers += bucket.count
            counts[bucket.id] = bucket.count
        })

        const awarenessCount = toolTotalAnswers - counts.never_heard
        const awarenessRatio = awarenessCount / toolTotalAnswers

        const satisfiedCount = counts.would_use
        const dissatisfiedCount = counts.would_not_use
        const usageCount = satisfiedCount + dissatisfiedCount
        const usageRatio = usageCount / awarenessCount
        const satisfactionRatio = satisfiedCount / usageCount
        const dissatisfactionRatio = dissatisfiedCount / usageCount

        const interestedCount = counts.interested
        const disinterestedCount = counts.not_interested
        const interestedRatio = interestedCount / (interestedCount + disinterestedCount)
        const disinterestedRatio = disinterestedCount / (interestedCount + disinterestedCount)
        const interestRatio = (interestedCount + disinterestedCount) / awarenessCount

        const computedTool = {
            id: toolData.id,
            total: toolTotalAnswers,
            awarenessCount,
            awarenessRatio,
            usageRatio,
            interestRatio,
            satisfiedCount,
            dissatisfiedCount,
            satisfactionRatio,
            dissatisfactionRatio,
            interestedCount,
            disinterestedCount,
            interestedRatio,
            disinterestedRatio,
        }

        computedTools.push(computedTool)
    })

    return sortBy(computedTools, 'usageRatio').reverse()
}

computeData()

export default rawData
