#include <WiFi.h>
#include <HTTPClient.h>
#include "DHT.h"

#define DHTPIN 4
#define DHTTYPE DHT22

const char* ssid = "winda";
const char* password = "winda1111";
const char* serverName = "http://172.20.10.3:1880/DHT"; // GANTI IP

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();

  WiFi.begin(ssid, password);

  Serial.print("Connecting WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi Connected!");
  Serial.print("IP ESP32: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // ====== 1. BACA SENSOR ======
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();

  Serial.println("----- SENSOR -----");
  Serial.print("Temp: ");
  Serial.println(temp);
  Serial.print("Hum : ");
  Serial.println(hum);

  if (isnan(temp) || isnan(hum)) {
    Serial.println("❌ Sensor gagal terbaca!");
    delay(2000);
    return;
  }

  // ====== 2. CEK WIFI ======
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("❌ WiFi terputus!");
    return;
  }

  // ====== 3. KIRIM HTTP ======
  HTTPClient http;
  http.begin(serverName);
  http.addHeader("Content-Type", "application/json");

  String json = "{";
  json += "\"temperature\":" + String(temp) + ",";
  json += "\"humidity\":" + String(hum);
  json += "}";

  Serial.println("----- HTTP SEND -----");
  Serial.println(json);

  int httpResponseCode = http.POST(json);

  Serial.print("HTTP Response: ");
  Serial.println(httpResponseCode);

  http.end();

  delay(3000);
}