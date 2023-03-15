import kafka from 'kafka-node';

const cliente_kafka = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });

const topicoParticiones = [{
    topic: 'topico_particiones',
    partitions: 5,
    replicationFactor: 1 
}];


cliente_kafka.createTopics(topicoParticiones, (error, resultado) => {
  if (resultado[0]?.error) {
    console.error(`Error creando el tópico: ${resultado[0].error}`);
  } else {
    console.log(`El tópico con particiones ha sido creado exitosamente.`);
  } 
});