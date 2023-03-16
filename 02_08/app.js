import kafka from 'kafka-node';

const cliente_kafka = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });

const admin_kafka = new kafka.Admin(cliente_kafka);

admin_kafka.listTopics((err, topicos) => {
    console.log('Lista de tópicos:', Object.keys(topicos[1]?.metadata));
    cliente_kafka.close();
});