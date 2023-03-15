import kafka from 'kafka-node';

const cliente_kafka = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });

const topico = [{
    topic: 'node_topico',
    partitions: 1,
    replicationFactor: 1
  }
]

cliente_kafka.createTopics(topico, (error, resultado) => {
  if (resultado[0]?.error) {
    console.error(`Error creando el tópico: ${resultado[0].error}`);
  } else {
    console.log(`El tópico ${topico[0].topic} ha sido creado exitosamente.`);
  }
  process.exit(0);  
});