import kafka from 'kafka-node';

const configuracion = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const productor = new kafka.Producer(configuracion);

const topicoMensajes = [{ topic: 'topico_frutas', messages: ['pera', 'piña', 'uva', 'fresa'] }];

productor.send(topicoMensajes, function (error, data) {
    if (error){
        console.error('Error al crear el tópico con los mensajes');
    }
});

