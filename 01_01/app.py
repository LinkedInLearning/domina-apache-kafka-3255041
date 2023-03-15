from kafka.admin import KafkaAdminClient, NewTopic

cliente_kafka = KafkaAdminClient(
    bootstrap_servers='localhost:9092',
    client_id='kafka-python'
)

topic = NewTopic(name='python_topic', num_partitions=1, replication_factor=1)

cliente_kafka.create_topics(new_topics=[topic])