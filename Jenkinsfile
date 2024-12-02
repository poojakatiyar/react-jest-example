pipeline {
    agent any

    environment {
        // Set the NVM directory path
        NVM_DIR = "/home/pooja/.nvm"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the latest code from the GitHub repository 
                git branch: 'master', url: 'https://github.com/poojakatiyar/react-jest-example.git'
            }
        }

        stage('Setup Node.js with NVM') {
            steps {
                script {
                    // Source NVM and use Node.js v18.19.1
                    sh '''
                        export NVM_DIR=$HOME/.nvm
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
                        nvm install 18.19.1 || echo "Node.js v18.19.1 is already installed"
                        nvm use 18.19.1
                    '''
                }
            }
        }

        stage('Check Node.js Version') {
            steps {
                script {
                    // Check the Node.js and npm versions to verify proper setup
                    sh '''
                        node -v
                        npm -v
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install the Node.js dependencies (React, Jest, etc.)
                    sh '''
                        npm install
                    '''
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run Jest tests
                    sh '''
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
