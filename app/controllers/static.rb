


get '/' do#back to homepage
  
   erb :"static/index" # link to static.rb folder under index.erb
end


#this method below is trying to retrieve short_url
get '/:short_url' do 


    a = Url.find_by(short_url: params["short_url"])
    if a #if a is found means this short url is exists in database
      redirect a.long_url   
    else
     redirect '/'#back to homepage
    end
  
end

#post = Submits data to be processed to a specified resource
post '/urls' do
  #@ let erb to recognise what is url1
  @url1 = Url.new(long_url: params["long_url"])
  # if user input the value = long_url into text box, new long url is created (params = {long_url : www.google.com })
  if @url1.save #if save give a random sample
    @url1.short_url = (('a'..'z').to_a + ('0'..'9').to_a).sample(8).join
    @url1.save #after giving a new short url save it
    @message = "successful" # shown user succesful at homepage
    return @url1.to_json
  else #   
    @message = @url1.errors.full_messages.join(", ")
    return @message.to_json
  end
  # go back to homepage
  erb :"static/index"
end

