<?php
require_once('vendor/autoload.php');

use RdKafka\Producer;
use RdKafka\Conf;

$configuracion = new Conf();
$configuracion->set('metadata.broker.list', 'localhost:9092');

$productor = new Producer($configuracion);
$metadatos = $productor->getMetadata(true, null, 1000);

$topicos = $metadatos->getTopics();

foreach ($topicos as $topico) {
    printf($topico->getTopic().PHP_EOL);
}
?>