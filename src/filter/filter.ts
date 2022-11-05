export class Filter {

    private value = '';

    constructor(private field: string) {
    }

    public matches(value: string, negate?: boolean): Filter {
        const operand = negate ? '!=' : '=';
        this.value = `${this.field}${operand}${value}`;

        return this;
    }

    public includes(values: string[], negate?: boolean): Filter {
        const operand = negate ? '!=' : '=';
        this.value = `${this.field}${operand}${values}`;

        return this;
    }

    public exists(negate?: boolean): Filter {
        const operand = negate ? '!' : '';
        this.value = `${operand}${this.field}`;

        return this;
    }

    public regex(value: string, negate?: boolean): Filter {
        const operand = negate ? '!=' : '=';
        this.value = `${this.field}${operand}${value}`;

        return this;
    }

    /**
     * @param {boolean} orEquals - when true acts as greaterThanOrEquals
     */
    public greaterThan(value: number, orEquals?: boolean): Filter {
        const operand = orEquals ? '>=' : '>';
        this.value = `${this.field}${operand}${value}`;

        return this;
    }

    /**
     * @param {boolean} orEquals - when true acts as lesserThanOrEquals
     */
    public lesserThan(value: number, orEquals?: boolean): Filter {
        const operand = orEquals ? '<=' : '<';
        this.value = `${this.field}${operand}${value}`;

        return this;
    }

    public toString(): string {
        return this.value;
    }
}
