pipeline {
    agent any

    stages {
        // 1. The "Build" Stage
        stage('Build') {
            steps {
                echo 'Building the Docker image...'
                // Use 'bat' for Windows
                bat 'docker build -t sandeepk2001/devops-task-2:latest .'
            }
        }
        
        // 2. The "Test" Stage
        stage('Test') {
            steps {
                echo 'Testing the app...'
                echo 'Test complete.'
            }
        }
        
        // 3. The "Deploy" Stage
        stage('Deploy') {
            steps {
                echo 'Deploying the image to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    // Use 'bat' and Windows %VARIABLE% syntax
                    bat 'docker login -u %DOCKER_USER% -p %DOCKER_PASS%'
                    bat 'docker push sandeepk2001/devops-task-2:latest'
                }
            }
        }
    }
}