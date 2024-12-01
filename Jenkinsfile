pipeline {
    agent any

    environment {
        // Use the exact name of the Node.js installation in Jenkins
        NODEJS_HOME = tool name: 'nodejs', type: 'NodeJSInstallation'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the latest code from the GitHub repository
                git branch: 'master', url: 'https://github.com/poojakatiyar/react-jest-example.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Install the Node.js dependencies (React, Jest, etc.)
                    sh '''#!/bin/bash
                        npm install
                    '''
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run Jest tests
                    sh '''#!/bin/bash
                        npm test -- --ci --runInBand
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Build and tests passed!'
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}
