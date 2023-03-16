<?php
require_once('vendor/autoload.php');

use RdKafka\Consumer;
use RdKafka\Conf;

$configuracion = new Conf();
$configuracion->set('metadata.broker.list', 'localhost:9092');
$configuracion->set('group.id', 'consumidor_php');

$consumidor = new Consumer($configuracion);
$topico = $consumidor->newTopic('topico_frutas');
$topico->consumeStart(0, 0);

while (true) {
    $mensajeFruta = $topico->consume(0, 1000);
    if ($mensajeFruta === null) {
        break;
    } else {
        echo $mensajeFruta->payload, "\n";
    }
}
?>
