import kafka from 'kafka-node';

const cliente_kafka = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });

const topico = [{
    topic: 'node_topico',
    partitions: 1,
    replicationFactor: 1
  }
]
