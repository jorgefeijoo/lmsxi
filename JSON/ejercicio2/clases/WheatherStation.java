package ejercicio2.clases;

import java.util.ArrayList;

public class WheatherStation {
  private int id;
  private String descripcion;
  private ArrayList<Sensor> sensors;

  public ArrayList<Sensor> getSensors() {
    return sensors;
  }

  public void setSensors(ArrayList<Sensor> sensors) {
    this.sensors = sensors;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getDescripcion() {
    return descripcion;
  }

  public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
  }

}
