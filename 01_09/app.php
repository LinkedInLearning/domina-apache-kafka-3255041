<?php
$nombre_contenedor = 'kafka';
$nombre_topico = 'topico_php_particiones';
$command = "docker exec $nombre_contenedor kafka-topics.sh --create --topic $nombre_topico ";
$command .= "--partitions 6 --replication-factor 1 --bootstrap-server localhost:9092";

exec($command);
?>