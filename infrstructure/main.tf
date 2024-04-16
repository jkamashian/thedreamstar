variable "zone_id" {
  description = "The Route 53 zone ID"
  type        = string
}

variable "public_ip" {
  description = "Public IP address for the DNS record"
  type        = string
}


resource "aws_lightsail_instance" "dreamstar1" {
  name              = "dreamstar1"
  blueprint_id      = "ubuntu_22_04"
  bundle_id         = "nano_3_0"
  availability_zone = "us-west-2a"
  ip_address_type   = "ipv6"
}


resource "aws_route53_record" "thedreamstar_a" {
  zone_id = var.zone_id
  name    = "thedreamstar.net"
  type    = "A"
  ttl     = 300
  records = [var.public_ip]
}

