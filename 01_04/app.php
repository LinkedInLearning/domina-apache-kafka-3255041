<?php
$nombre_contenedor = 'kafka';
$topico = 'php_topico';
$comando = "docker exec $nombre_contenedor kafka-topics.sh --delete --topic $topico --bootstrap-server localhost:9092";
$salida = array();
$valor_regresado = 0;
exec($comando, $salida, $valor_regresado);

if ($valor_regresado !== 0) {
    echo "Erro al eliminar el tópico $topico " . implode("\n", $salida);
} else {
    echo "El tópico $topico ha sido eliminado con éxito.";
}
?>