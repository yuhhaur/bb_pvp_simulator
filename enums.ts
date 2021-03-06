module ENUM {

    /**
     * Is the skill opening, attack, defense, etc.
     */
    export enum SkillType {
        OPENING = 1,
        ATTACK = 2, // aka active
        DEFENSE = 3,
        FIELD = 4,
        PROTECT = 5,

        ACTION_ON_DEATH = 16,
    }
    
    /**
     * Is the skill buff, attack, magic, etc.
     */
    export enum SkillFunc {
        BUFF = 1,
        DEBUFF = 2,
        ATTACK = 3,
        MAGIC = 4, // anything that ignores position
        COOP = 5,
        REVIVE = 6,
        KILL = 7,
        STEAL = 8,
        CHARGE = 9,
        DRAIN = 11,
        PROTECT = 12,
        COUNTER = 13,
        PROTECT_COUNTER = 14,
        TREASURE_HUNTER = 15,
        CLEAR_BUFF = 16,
        SUICIDE = 17,
        HEAL = 18,
        AFFLICTION = 19,
        PATIENCE = 20,
        DEBUFFATTACK = 21, // arg1: multiplier, arg2: status, arg3: debuff prob., arg4: debuff multi (use WIS)
        DEBUFFINDIRECT = 22,

        RANDOM = 24,
        COPY = 25,
        IMITATE = 26,
        EVADE = 27,
        PROTECT_REFLECT = 28,
        PROTECT_DISPEL = 29,
        TURN_ORDER_CHANGE = 31
    }
    
    /**
     * Is the skill calculated based on atk, wis, agi, etc.
     */
    export enum SkillCalcType {
        DEFAULT = 0, // default is Wis, usually used for buff
        ATK = 1,
        WIS = 2, // usually used for active skill
        AGI = 3, 
        HEAL = 4,
        BUFF = 5,
        DEBUFF = 6,
        REFLECT = 7
    };
    
    export enum StatType {
        HP, ATK, DEF, WIS, AGI
    }
    
    export enum StatusType { // skillFuncArg2 for buffs
        ATK = 1,
        DEF = 2,
        WIS = 3,
        AGI = 4,

        ATTACK_RESISTANCE = 5,
        MAGIC_RESISTANCE = 6,
        BREATH_RESISTANCE = 7,

        SKILL_PROBABILITY = 8,

        ACTION_ON_DEATH = 16,

        HP_SHIELD = 17,
    }
    
    export enum FormationRow {
        REAR = 3,
        MID = 2,
        FRONT = 1
    }
}


