import kafka from 'kafka-node';

const cliente_kafka = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const topico = [{ topic: "topico_frutas", partition: 0, offset:0 }];

const opciones = {
    groupId: 'node_consumidor',
    fromBeginning: true
};

const consumidor = new kafka.Consumer(cliente_kafka, topico, opciones);

consumidor.on('message', function (mensaje) {
    console.log(mensaje.value);
});