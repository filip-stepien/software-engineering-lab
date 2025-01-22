package org.example;

import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.Gson;

public class JSONExportVisitor implements Visitor {

    private JsonObject jsonObject;

    public JSONExportVisitor() {
        jsonObject = new JsonObject();
    }

    @Override
    public void visitClient(Client client) {
        JsonObject clientJson = new JsonObject();
        clientJson.addProperty("firstName", client.getFirstName());
        clientJson.addProperty("lastName", client.getLastName());
        clientJson.addProperty("email", client.getEmail());
        clientJson.addProperty("weight", client.getWeight());
        clientJson.addProperty("height", client.getHeight());

        jsonObject.add("client", clientJson);
    }

    @Override
    public void visitWorker(Worker worker) {
        JsonObject workerJson = new JsonObject();
        workerJson.addProperty("firstName", worker.getFirstName());
        workerJson.addProperty("lastName", worker.getLastName());
        workerJson.addProperty("email", worker.getEmail());
        workerJson.addProperty("department", worker.getDepartment());
        workerJson.addProperty("salary", worker.getSalary());

        jsonObject.add("worker", workerJson);
    }

    @Override
    public void visitTrainer(Trainer trainer) {
        JsonObject trainerJson = new JsonObject();
        trainerJson.addProperty("firstName", trainer.getFirstName());
        trainerJson.addProperty("lastName", trainer.getLastName());
        trainerJson.addProperty("email", trainer.getEmail());
        trainerJson.addProperty("department", trainer.getDepartment());
        trainerJson.addProperty("salary", trainer.getSalary());
        trainerJson.addProperty("expertise", trainer.getExpertise());

        jsonObject.add("trainer", trainerJson);
    }

    @Override
    public String toString() {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(jsonObject);
    }
}
