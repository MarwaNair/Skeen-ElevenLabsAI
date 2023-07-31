# Skeen Project

## Inspiration
Many people worldwide suffer from skin conditions that negatively impact their mental and physical well-being. They often resort to taking dangerous medications to treat the symptoms without addressing the root causes. Skeen aims to change that.

## What it does
Skeen is an app that detects skin conditions from user-uploaded pictures, analyzes the user’s lifestyle and habits to identify potential causes, and provides suggestions for remedying the problem. Additionally, Skeen features an AI Assistant chatbot for skincare, powered by the GPT-3.5 Turbo model, that can answer all questions related to skincare. Now, with the latest update, the chatbot assistant is also equipped with voice capabilities, allowing it to speak its answers to the user. Users can also interact with the assistant by recording their voice, enabling a more intuitive and interactive experience.

## How we built it
### Skin Condition Detection:
We trained a TensorFlow convolutional neural network using data from DermNet NZ, the world’s leading online resource for skin-related information. This network classifies images of skin conditions, enabling accurate and reliable identification.

### Lifestyle Analysis:
To analyze user lifestyles and habits, we leveraged Terra’s API to collect data from all health applications and devices that the user granted access to. By pinpointing potential causes such as nutrition and dietary issues, sleep problems, and stress, we can offer comprehensive suggestions for improving skin health.

### AI Chatbot with Voice Integration:
The AI chatbot was developed using the GPT-3.5 Turbo model, allowing users to interact through text-based queries initially. With the latest update, we integrated ElevenLabs API to enable voice capabilities. Now, users can receive spoken answers from the assistant, making the skincare advice more accessible and user-friendly.

### User Voice Transcription:
To facilitate user interaction, we employed OpenAI's Whisper model for transcribing the user's voice. This allows users to record themselves while communicating with the assistant, making the interaction more dynamic and natural.

## Challenges we ran into
Artificial intelligence is not widely used in the skin health sector, making it ripe for innovation. However, datasets are not open-source, so we relied on DermNet as the most complete and reliable dermatology dataset. We also used data augmentation and pre-processing techniques to improve model accuracy. Integrating voice capabilities and transcription added complexity to the project, but it was essential to create a more versatile and user-friendly experience.

## Accomplishments that we’re proud of
We are proud of our model’s ability to detect 23 skin conditions with good accuracy. Additionally, our data analytics demonstrate the feasibility of using health data from apps and devices to identify users’ bad habits that may be contributing to their skin problems. We are also proud of our AI chatbot, which now offers voice-based responses, enhancing accessibility and ease of use.

## What’s next for SKEEN
With the voice assistant feature successfully integrated, we plan to further enhance the user experience by incorporating advanced natural language processing capabilities. Additionally, we aim to expand our solution to address more health-related concerns and identify more potential causes from users’ lifestyles. Our mission is to continue innovating in the skincare and health sector, providing personalized and effective solutions for users worldwide.
