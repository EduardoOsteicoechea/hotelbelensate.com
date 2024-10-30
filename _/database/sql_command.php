<?php
	define('COMMAND_TYPE_SELECT', 0);
	define('COMMAND_TYPE_INSERT', 1);
	define('COMMAND_TYPE_UPDATE', 2);
	define('COMMAND_TYPE_DELETE', 3);
	define('COMMAND_TYPE_ALTER',  4);
	define('COMMAND_TYPE_DROP',   5);

	function sql_command(PDO $conn, int $command_type, string $sql, array $params = []): mixed {
		try 
		{
			$stmt = $conn->prepare($sql);
			 if (!empty($params)) {
            foreach ($params as $key => $value) {
                $stmt->bindValue($key, $value, PDO::PARAM_STR);
            };
			};
			$stmt->execute();

			switch ($command_type) {
            case COMMAND_TYPE_SELECT:
					return $stmt->fetchAll() ?: null;
            case COMMAND_TYPE_INSERT:
					return $stmt->rowCount() > 0;
            case COMMAND_TYPE_UPDATE:
					return $stmt->rowCount() > 0;
            case COMMAND_TYPE_DELETE:
					return $stmt->rowCount() > 0;
            case COMMAND_TYPE_ALTER:
					return $stmt->rowCount() > 0;
            case COMMAND_TYPE_DROP:
					return $stmt->rowCount() > 0;
            default:
                throw new InvalidArgumentException("Invalid command type: $command_type");
        	};
		} 
		catch (PDOException $e) 
		{
			error_log("SQL Error: " . $sql . "\n" . $e->getMessage());
			throw $e; 
		} 
		finally 
		{
			$stmt = null;
			$conn = null;
		};
	};
?>