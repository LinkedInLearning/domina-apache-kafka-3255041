from kafka.admin import KafkaAdminClient, NewTopic

cliente_kafka = KafkaAdminClient(bootstrap_servers='localhost:9092')

topico = NewTopic(name='topico_particiones', num_partitions=5, replication_factor=1)

cliente_kafka.create_topics([topico])