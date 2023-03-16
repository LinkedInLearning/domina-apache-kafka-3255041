import  { Kafka } from 'kafkajs';

async function eliminarTopico() {

  const cliente_kafka = new Kafka({brokers: ['localhost:9092']});

  const admin_kafka = cliente_kafka.admin();
  await admin_kafka.connect();

  await admin_kafka.deleteTopics({topics: ['topico_frutas']});  
  await admin_kafka.disconnect();  
}

eliminarTopico();
