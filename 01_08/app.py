from kafka.admin import KafkaAdminClient, NewTopic

cliente_kafka = KafkaAdminClient(bootstrap_servers='localhost:9092')