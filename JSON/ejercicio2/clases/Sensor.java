package ejercicio2.clases;

import java.util.ArrayList;

public class Sensor {
  private String date;
  private ArrayList<Measurements> measurements;

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public ArrayList<Measurements> getMeasurements() {
    return measurements;
  }

  public void setMeasurements(ArrayList<Measurements> measurements) {
    this.measurements = measurements;
  }
}
