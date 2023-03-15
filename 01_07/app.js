import kafka from 'kafka-node';

const cliente_kafka = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });

const topicoParticiones = [{
    topic: 'topico_particiones' 
}];