pipeline {
    agent any

    stages {
        // 1. The "Build" Stage
        stage('Build') {
            steps {
                echo 'Building the Docker image...'
                // !! REPLACE 'sandeepk2001' with your Docker ID !!
                sh 'docker build -t sandeepk2001/devops-task-2:latest .'
            }
        }
        
        // 2. The "Test" Stage
        stage('Test') {
            steps {
                echo 'Testing the app...'
                // This is a simple test. In a real project, you'd run 'npm test'.
                echo 'Test complete.'
            }
        }
        
        // 3. The "Deploy" Stage
        stage('Deploy') {
            steps {
                echo 'Deploying the image to Docker Hub...'
                // Jenkins needs your Docker Hub credentials for this step
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                    
                    // !! REPLACE 'sandeepk2001' with your Docker ID !!
                    sh 'docker push sandeepk2001/devops-task-2:latest'
                }
            }
        }
    }
}