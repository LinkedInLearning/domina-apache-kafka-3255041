<?php
require_once('vendor/autoload.php');

use RdKafka\Producer;
use RdKafka\Conf;

$configuracion = new Conf();
$configuracion->set('metadata.broker.list', 'localhost:9092');

?>
