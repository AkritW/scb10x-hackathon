# DP_GANs Implementation For Paraphrase Task in Thai Language

## Overview

This project presents an advanced implementation of Diversity-Promoting Generative Adversarial Networks (DP-GAN) for the Thai language. It uniquely combines the generator capabilities of OpenThaiGPT with the discriminator strengths of WangchanBERTa, creating a powerful tool for generating novel and fluent paraphrased Thai text.

## Features

Innovative Integration: Leverages the strengths of OpenThaiGPT's generative capabilities and WangchanBERTa's discriminative power.
Fluent Paraphrasing: Capable of producing high-quality, fluent paraphrased Thai text.
Novel Text Generation: Encourages the production of diverse and novel text outputs, addressing common issues in text generation like repetitiveness.

## Model Architecture

Generator (OpenThaiGPT): Utilizes the openthaigpt/openthaigpt-1.0.0-beta-7b-chat-ckpt-hf model for generating text.
Discriminator (WangchanBERTa): Employs the airesearch/wangchanberta-base-att-spm-uncased model for evaluating and guiding the text generation process.

