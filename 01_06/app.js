import  { Kafka } from 'kafkajs';

async function eliminarTopico() {

  const cliente_kafka = new Kafka({brokers: ['localhost:9092']});

  const admin_kafka = cliente_kafka.admin();
  await admin_kafka.connect();
}

eliminarTopico();
