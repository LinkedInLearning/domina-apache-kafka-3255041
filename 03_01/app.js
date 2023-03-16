import kafka from 'kafka-node';


const configuracionOpciones = {
    kafkaHost: 'localhost:9092',
    autoConnect: true,
    connectRetryOptions: { retries: 20 }
};

const configuracion = new kafka.KafkaClient(configuracionOpciones);
const productor = new kafka.Producer(configuracion);

const topicoMensajes = [{ topic: 'topico_frutas', messages: ['pera', 'piña', 'uva', 'fresa'] }];

productor.send(topicoMensajes, function (error, data) {
    if (error) {
        console.error('Error al crear el tópico con los mensajes');
    } else {
        console.log(data)
    }
});

productor.on('error', function (error) {
    if (error.code === 'ECONNREFUSED') {
        console.error('Apache Kafka no esta disponible');
    } else {
        console.log(`Error con el productor de Kafka: ${error}`);
    }
});