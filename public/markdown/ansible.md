#### Ansible Playbooks

Managing a growing number of VM's became difficult, but I wanted to start up new projects in their own self-contained environments. I recalled learning about Ansible during my Linux System Administration course at CU Boulder and decided to use the tool to manage VMs on my Proxmox host.

When I create a clone of my debian image template, there are a few tasks I always need to undertake:
* Change the hostname to a relevant name
* Update all packages
* Add user to the docker group

Recently, I've been using minikube and deploying my apps to kubernetes. If I want multiple environments for each app (such as a production, development, and testing environments) then I'll have to spin up 3 VM's for a single project. Ansible enables me to install minikube, kubectl, and helm; configure kubectl to the minikube environment; and install a github self hosted runner with a few simple commands. 

The effort I've put into my ansible configurations today will enable me to quickly start working on future projects.