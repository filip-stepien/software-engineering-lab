package org.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class JSONExportVisitorTest {
    private JSONExportVisitor jsonExportVisitor;
    private Worker worker;
    private Trainer trainer;
    private Client client;

    @BeforeEach
    void setUp() {
        worker = new Worker("John", "Doe", "john.doe@example.com", "Sales", 8000);
        trainer = new Trainer("Jane", "Smith", "jane.smith@example.com", "Yoga", 10000);
        client = new Client("Alice", "Johnson", "alice.johnson@example.com", 70.0f, 1.75f);

        jsonExportVisitor = new JSONExportVisitor();
    }

    @Test
    void testVisitWorker() {
        worker.accept(jsonExportVisitor);

        String expectedJson = """
                {
                  "worker": {
                    "firstName": "John",
                    "lastName": "Doe",
                    "email": "john.doe@example.com",
                    "department": "Sales",
                    "salary": 8000.0
                  }
                }""";

        assertEquals(expectedJson, jsonExportVisitor.toString());
    }

    @Test
    void testVisitTrainer() {
        trainer.accept(jsonExportVisitor);

        String expectedJson = """
                {
                  "trainer": {
                    "firstName": "Jane",
                    "lastName": "Smith",
                    "email": "jane.smith@example.com",
                    "department": "Training",
                    "salary": 10000.0,
                    "expertise": "Yoga"
                  }
                }""";

        assertEquals(expectedJson, jsonExportVisitor.toString());
    }

    @Test
    void testVisitClient() {
        client.accept(jsonExportVisitor);

        String expectedJson = """
                {
                  "client": {
                    "firstName": "Alice",
                    "lastName": "Johnson",
                    "email": "alice.johnson@example.com",
                    "weight": 70.0,
                    "height": 1.75
                  }
                }""";

        assertEquals(expectedJson, jsonExportVisitor.toString());
    }
}
