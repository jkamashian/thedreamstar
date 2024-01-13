# Makefile for setting up and running a Flask application with Apache

# Variables
PYTHON = python3
PIP = pip3
FLASK_APP = app.py
FLASK_RUN = FLASK_APP=$(FLASK_APP) $(PYTHON) -m flask run
APACHE_CONFIG = /etc/apache2/sites-available/myflaskapp.conf
WSGI_FILE = myflaskapp.wsgi

# Default target
all: install run

# Install dependencies
install:
    sudo apt-get update
    sudo apt-get install -y python3 python3-pip libapache2-mod-wsgi-py3 apache2
    sudo $(PIP) install Flask

# Run the Flask application
run:
    $(FLASK_RUN)

# Set up Apache to serve the Flask app
setup-apache:
    sudo a2dissite 000-default.conf
    sudo cp $(APACHE_CONFIG) /etc/apache2/sites-available/
    sudo a2ensite myflaskapp
    sudo service apache2 restart

# Create Apache and WSGI configuration files
config-apache:
    echo '<VirtualHost *:80>\n\tServerName mydomain.com\n\tWSGIDaemonProcess myflaskapp threads=5\n\tWSGIScriptAlias / /home/username/myflaskapp/$(WSGI_FILE)\n\n\t<Directory /home/username/myflaskapp>\n\t\tWSGIProcessGroup myflaskapp\n\t\tWSGIApplicationGroup %{GLOBAL}\n\t\tOrder deny,allow\n\t\tAllow from all\n\t</Directory>\n</VirtualHost>' | sudo tee $(APACHE_CONFIG)
    echo 'import sys\nsys.path.insert(0, "/home/username/myflaskapp")\n\nfrom app import app as application' | tee $(WSGI_FILE)

# Clean up the environment
clean:
    rm -f $(WSGI_FILE)

.PHONY: install run setup-apache config-apache clean
