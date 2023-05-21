import discord
from discord.ext import commands

intents = discord.Intents.default()
bot = commands.Bot(command_prefix='/', intents=intents)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')

@bot.command()
async def poll(ctx, question, options, voter_role, allow_change_options, show_votes, multi_vote, close_in, default_keys):
    # Call the /poll create command with the specified parameters
    await ctx.send(f"/poll create {question} {options} {voter_role} {allow_change_options} {show_votes} {multi_vote} {close_in} {default_keys}")

@bot.command()
async def get_poll_results(ctx):
    # Retrieve the poll results from the channel where the command was called
    channel = ctx.channel
    async for message in channel.history(limit=None):
        if message.author == bot.user:
            if "/poll create" in message.content:
                # Extract the poll parameters from the bot's response
                params = message.content.split(" ")[2:]  # Remove "/poll create"
                question = params[0]
                options = params[1]
                voter_role = params[2]
                allow_change_options = params[3]
                show_votes = params[4]
                multi_vote = params[5]
                close_in = params[6]
                default_keys = params[7]

                # Process the poll parameters and retrieve the results
                # Add your code here to fetch and process the poll results

                await ctx.send("Poll results: ...")  # Replace with your own result output

bot.run('MTEwOTQ1NTA4OTU3MzMxODc0Nw.GlXaxJ.dGq65uDFJtdgcozMxgCduuwTOFdN6MaTqBoeSo')
