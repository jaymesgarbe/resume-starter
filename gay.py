from scipy import integrate

# Given constants
G = 6.67e-8
Mr = 5.97e27
mu = 29
k = 1.38e-16
mu_u = 1.67e-24
r = 6.37e8

# Given cross-sections
sigma_N2 = 6e-27
sigma_O2 = 5e-27
sigma_Ar = 5e-27

# Define the integrand
def integrand(z):
    return (sigma_N2 / 29 + sigma_O2 / 32 + sigma_Ar / 40) / r**2

# Numerically integrate from 0 to infinity
result, error = integrate.quad(integrand, 0, float('inf'))

# Calculate the constants in front of the integral
constants = -G * Mr / (mu * k * mu_u)

# Calculate the estimated value of tau
tau = constants * result

print(tau)