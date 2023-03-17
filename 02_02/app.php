<?php
require_once('vendor/autoload.php');

use RdKafka\Producer;
use RdKafka\Conf;

$configuracion = new Conf();
$configuracion->set('metadata.broker.list', 'localhost:9092');

$productor = new Producer($configuracion);
$topico = $productor->newTopic('topico_frutas');

$frutas = ['manzana', 'mango', 'naraja', 'fresa', 'kiwi'];

foreach ($frutas as $fruta) {
    $topico->produce(0, 0, $fruta);
}

$productor->flush(3000);
?>
