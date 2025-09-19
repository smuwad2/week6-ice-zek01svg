<script>
export default {
    data() {
        return {
            name: '',
            job: '',
            bio: '',
            imageUrl: '/assets/head1.jpg',
            bgColor: '#f5f5f5',
            textColor: '#333',
            themes: ['dark', 'light', 'neon'],
            currentThemeIndex: 0
        }
    },
    
    methods: {
        // Add code here

    }
}
</script>

<template>
    <!-- Form Section -->
    <div class="container">
        <div class="form-section">
            <h2>Customize Profile</h2>

            <label>Name:</label><br>
            <input id="name" v-model="name" placeholder="Your Name"><br><br>

            <label>Job Title:</label><br>
            <input id="job" v-model="job" placeholder="Web Developer"><br><br>

            <label>Bio:</label><br>
            <textarea id="bio" v-model="bio" rows="3" placeholder="A short bio..."></textarea><br><br>

            <label>Profile Image URL:</label><br>
            <input id="imageUrl" v-model="imageUrl" placeholder="https://example.com/me.jpg"><br><br>

            <label>Theme Presets:</label><br>
            <button class="theme-button">Cycle theme</button> <!-- click button to cycle through the themes -->
            <!-- Dark theme: background-color: #333, text-color: #fff -->
            <!-- Light theme: background-color: #fff, text-color: #000  -->
            <!-- Neon theme: background-color: #39ff14, text-color: #000 -->

        </div>
        <!-- Preview Section -->
        <div class="preview-section">
            <h2>Live Preview</h2>
            <div class="preview-card"> <!-- Add code here to set background color and text color -->
                <img :src="imageUrl" class="preview-img">
                <h3>{{ name || 'Your Name' }}</h3>
                <h4>{{ job || 'Job Title' }}</h4>
                <p>{{ bio || 'Write something about yourself...' }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        gap: 20px;
        padding: 20px;
        font-family: sans-serif;
    }

    .form-section,
    .preview-section {
        width: 50%;
    }

    .preview-card {
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: all 0.3s ease;
    }

    .preview-img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    .theme-button {
        margin: 5px;
        padding: 5px 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
</style>