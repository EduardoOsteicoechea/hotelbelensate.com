<?php
function passes_sanity_check(string $input_value): bool
{
   $forbidden_characters = [
      // Common injection characters
      '<', '>', '"', "'", '`', ';', '|', '$', '#', '%', '&', '*', '(', ')', '[', ']', '{', '}', '\\', '/',
      // Special characters for encoding and decoding
      '%00', '%20', '%27', '%22', '%3C', '%3E', '%3D', '%2B', '%2F', '%09', '%0A', '%0D',
      // Control characters
      "\r", "\n", "\t", "\v", "\f", "\b", "\a", "\0",
      // Non-printable characters (some examples)
      "\x00", "\x01", "\x02", "\x03", "\x04", "\x05", "\x06", "\x07",
      // Unicode characters that can be used for obfuscation
      "\u2028", "\u2029", "\u00A0", "\u0000", "\u0009", "\u000A", "\u000B", "\u000C", "\u000D", "\u001B",
      // Other potentially harmful characters
      // '@', '?', '!', '^', '~', '`', '+', '-', '_', '=',
      '@', '?', '!', '^', '~', '`', '+',
  ];

  
  if(strlen($input_value) < 12)
  {
      foreach ($forbidden_characters as $character) 
      {
         if(str_contains($input_value, $character))
         {
            echo "The string contained the forbidden character: " . $character . "\n\n\r";
            return false;
         }
      };
  };

   return true;
}