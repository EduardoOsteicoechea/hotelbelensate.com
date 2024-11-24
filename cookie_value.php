<?php
echo "USER_SESSION_TOKEN";
echo "=";
echo bin2hex(random_bytes(16));
echo "_";
echo time() + 120;