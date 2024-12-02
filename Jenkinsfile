pipeline {
    agent any

    environment {
        // Set NVM directory for Node.js management
        NVM_DIR = "/home/pooja/.nvm"
        // Modify the PATH correctly with Jenkins' PATH+EXTRA syntax
        PATH+EXTRA = "/home/pooja/.nvm/versions/node/v18.19.1/bin"
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
                    // Load NVM and set Node.js version to v18.19.1
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
                    // Check Node.js and npm versions to ensure they are correct
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
                    // Install Node.js dependencies (e.g., React, Jest, etc.)
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
