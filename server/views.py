from django.shortcuts import render
from django.http import HttpResponse
import twitter
import RPi.GPIO as GPIO

api = twitter.Api(consumer_key='FDgwwje4mJT5K2iQRgm7tKn7x',
                  consumer_secret='5zZaMgJr2CU1pbptUmecM3kZMaaR3MaYVAYvElqPxVahnalRro',
                  access_token_key='2829026028-GVNzcCYnbp5RO4YwW0IngqzU4poossBngTK76Wf',
                  access_token_secret='BjRVwrEUA4mxqymsqSA7nPvYw6Y7Nxs2FZ7zZrH3rotNH')

def home(request):
  return render(request, 'home.html')

def twitter(request):
  statuses = api.GetUserTimeline(screen_name='nnnbots')
  last_tweet = statuses[0].text

  GPIO.setmode(GPIO.BCM)
  GPIO.setup(18, GPIO.OUT)

  output = str()

  if last_tweet == 'led on':
    GPIO.output(18, True)
    output = 'Led on'
    print output
  elif last_tweet == 'led off':
    GPIO.output(18, False)
    output = 'Led off'
    print output
  else:
    output = 'None'
    print output

  return HttpResponse(output)
