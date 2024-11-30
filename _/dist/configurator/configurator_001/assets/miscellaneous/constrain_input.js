export default class constrain_input {
    constructor(input, input_max_length) {
        this.forbidden_characters = ["<", ">", ",", "/", "\\", "$", "%", "&", "(", ")", "{", "}", "[", "]", "?", "¿"];
        this.input = input;
        this.input_max_length = input_max_length;
        this.input.oninput = () => {
            this.inforce_input_limit();
            this.validate_input_characters();
        };
    }
    inforce_input_limit() {
        if (this.input_is_not_empty_string()
            &&
                this.input_exeeds_limit()) {
            this.generate_character_limit_violation_alert();
            if (this.input_exeeds_limit()) {
                this.trim_input_value_to_character_limit();
            }
            ;
        }
        ;
    }
    validate_input_characters() {
        if (this.input_is_not_empty_string()) {
            this.validate_each_character_against_forbidden_characters();
        }
    }
    validate_each_character_against_forbidden_characters() {
        this.forbidden_characters.forEach(forbidden_character => {
            if (this.input_contains_forbidden_character(forbidden_character)) {
                this.generate_forbidden_character_alert(forbidden_character);
                this.remove_last_character();
            }
        });
    }
    remove_last_character() {
        this.input.value = this.input.value.substring(0, this.input.value.length - 1);
    }
    input_contains_forbidden_character(character) {
        return this.input.value.includes(character);
    }
    generate_forbidden_character_alert(character) {
        alert(`El caracter "${character}" no es permitido.`);
    }
    generate_character_limit_violation_alert() {
        alert(`El límite de caracteres es "${this.input_max_length}".`);
    }
    input_is_not_empty_string() {
        return this.input.value !== "";
    }
    input_exeeds_limit() {
        return this.input.value.length > this.input_max_length;
    }
    trim_input_value_to_character_limit() {
        this.input.value = this.input.value.substring(0, this.input_max_length);
    }
}
//# sourceMappingURL=constrain_input.js.map