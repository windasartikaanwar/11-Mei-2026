/*
  Project : Pendeteksi Kebisingan
  Board   : ESP32
  Sensor  : INMP441
  Output  : LED + Buzzer
*/

#include <driver/i2s.h>

// ================= PIN =================
#define I2S_WS   15   // L/R
#define I2S_SD   32   // DOUT
#define I2S_SCK  14   // BCLK

#define LED_PIN     2
#define BUZZER_PIN  4

// ================= I2S CONFIG =================
#define I2S_PORT I2S_NUM_0
#define BUFFER_LEN 64

int16_t samples[BUFFER_LEN];

void setupI2S() {
  
  i2s_config_t i2s_config = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
    .sample_rate = 44100,
    .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
    .communication_format = I2S_COMM_FORMAT_I2S,
    .intr_alloc_flags = 0,
    .dma_buf_count = 8,
    .dma_buf_len = 64,
    .use_apll = false,
    .tx_desc_auto_clear = false,
    .fixed_mclk = 0
  };

  i2s_pin_config_t pin_config = {
    .bck_io_num = I2S_SCK,
    .ws_io_num = I2S_WS,
    .data_out_num = I2S_PIN_NO_CHANGE,
    .data_in_num = I2S_SD
  };

  i2s_driver_install(I2S_PORT, &i2s_config, 0, NULL);
  i2s_set_pin(I2S_PORT, &pin_config);
}

void setup() {

  Serial.begin(115200);

  pinMode(LED_PIN, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  setupI2S();

  Serial.println("Sistem Monitoring Kebisingan Aktif");
}

void loop() {

  size_t bytesRead;

  i2s_read(I2S_PORT,
           &samples,
           BUFFER_LEN * sizeof(int16_t),
           &bytesRead,
           portMAX_DELAY);

  int samplesRead = bytesRead / sizeof(int16_t);

  long total = 0;

  for (int i = 0; i < samplesRead; i++) {
    total += abs(samples[i]);
  }

  int noiseLevel = total / samplesRead;

  Serial.print("Noise Level : ");
  Serial.println(noiseLevel);

  // ===== THRESHOLD =====
  if (noiseLevel > 2000) {

    digitalWrite(LED_PIN, HIGH);
    digitalWrite(BUZZER_PIN, HIGH);

  } else {

    digitalWrite(LED_PIN, LOW);
    digitalWrite(BUZZER_PIN, LOW);
  }

  delay(100);
}