export type SkillsStats = {
    name?: string;
    target?: string;
    progress: {
        done: number;
        total: number;
        // percentageValue: number;
    },
    timeLeft?: number;
    priority?: 'critical' | 'high' | 'medium' | 'low' | 'unknown'
}
