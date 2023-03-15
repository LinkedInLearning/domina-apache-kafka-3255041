<?php
require_once('vendor/autoload.php');

use RdKafka\Producer;
use RdKafka\Conf;

$configuracion = new Conf();
$configuracion->set('metadata.broker.list', 'localhost:9092');

$productor = new Producer($configuracion);
$topico = $productor->newTopic('php_topico');

$topico->produce(0, 0, "Mi primer mensaje");
$productor->flush(3000);
?>