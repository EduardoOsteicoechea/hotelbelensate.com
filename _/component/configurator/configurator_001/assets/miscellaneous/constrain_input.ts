export default class constrain_input
{
   private forbidden_characters: string[] = ["<", ">", ",", "/", "\\", "$", "%", "&", "(", ")", "{", "}", "[", "]", "?", "¿"];
   private input: HTMLInputElement;
   private input_max_length: number;

   constructor
      (
         input: HTMLInputElement,
         input_max_length: number
      )
   {
      this.input = input;
      this.input_max_length = input_max_length;

      this.input.oninput = ()=>{
         this.inforce_input_limit();
         this.validate_input_characters();
      };
   }

   private inforce_input_limit(): void
   {
      if (
         this.input_is_not_empty_string()
         &&
         this.input_exeeds_limit()
      )
      {
         this.generate_character_limit_violation_alert();

         if (this.input_exeeds_limit())
         {
            this.trim_input_value_to_character_limit();
         };
      };
   }

   private validate_input_characters(): void
   {
      if (this.input_is_not_empty_string())
      {
         this.validate_each_character_against_forbidden_characters();
      }
   }

   private validate_each_character_against_forbidden_characters(): void
   {

      this.forbidden_characters.forEach(forbidden_character =>
      {
         if (this.input_contains_forbidden_character(forbidden_character))
         {
            this.generate_forbidden_character_alert(forbidden_character);
            this.remove_last_character();
         }
      })
   }

   private remove_last_character(): void
   {
      this.input.value = this.input.value.substring(0, this.input.value.length - 1)
   }

   private input_contains_forbidden_character(character: string): boolean
   {
      return this.input.value.includes(character);
   }

   private generate_forbidden_character_alert(character: string): void
   {
      alert(`El caracter "${character}" no es permitido.`);
   }

   private generate_character_limit_violation_alert(): void
   {
      alert(`El límite de caracteres es "${this.input_max_length}".`);
   }

   private input_is_not_empty_string(): boolean
   {
      return this.input.value !== "";
   }

   private input_exeeds_limit(): boolean
   {
      return this.input.value.length > this.input_max_length;
   }

   private trim_input_value_to_character_limit(): void
   {
      this.input.value = this.input.value.substring(
         0,
         this.input_max_length
      );
   }
}