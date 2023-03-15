from kafka.admin import KafkaAdminClient
from kafka.errors import UnknownTopicOrPartitionError

cliente_kafka = KafkaAdminClient(bootstrap_servers="localhost:9092")
topico_eliminar = "python_topic"